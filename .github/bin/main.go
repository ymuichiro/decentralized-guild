package main

import (
	"context"
	"fmt"
	"os"
	"path/filepath"

	"dagger.io/dagger"
)

var (
	hostDir string = "."
	workDir string = "/decentralized-guild"
)

func main() {

	args := os.Args

	if len(args) != 2 {
		panic("no argument specified")
	}

	registryPath := args[1]
	ctx := context.Background()
	client, err := dagger.Connect(context.Background(), dagger.WithLogOutput(os.Stdout))

	if err != nil {
		panic(err)
	}

	defer client.Close()

	filepath, _ := filepath.Abs(hostDir)
	platform := dagger.Platform("linux/amd64")

	// build
	fmt.Println("===", "Build Start", "===")
	ref := client.Container(dagger.ContainerOpts{Platform: platform}).
		From("node:20-alpine").
		WithDirectory(workDir, client.Host().Directory(filepath, dagger.HostDirectoryOpts{
			Exclude: []string{
				"**/node_modules/",
				".github/",
				"**/*.db",
				"**/*.db-journal",
				"**/.env",
				"**/.env.local",
				"**/README.md",
				"**/.storybook",
				".git/",
				"**/*.log",
				".npm",
				".next",
				".DS_Store",
			},
		})).
		WithWorkdir(workDir).
		WithExec([]string{"npm", "install"}).
		WithExec([]string{"npm", "run", "build"}).
		WithDefaultArgs(dagger.ContainerWithDefaultArgsOpts{Args: []string{"npm", "run", "start"}}).
		WithExposedPort(3000)

	_, err = ref.Stderr(ctx)
	log, _ := ref.Stdout(ctx)
	fmt.Println("build", log)

	if err != nil {
		panic(err)
	}

	published, err := ref.Publish(ctx, registryPath)

	if err != nil {
		panic(err)
	}
	fmt.Printf("Published image to: %s\n", published)
}
