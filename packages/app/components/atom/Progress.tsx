import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  fullScreen?: boolean;
}

export default function Progress(props: Props): JSX.Element {
  if (props.fullScreen) {
    return (
      <div
        className="center"
        style={{
          height: "100svh",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <div className="center" style={{ height: "5rem", width: "100%" }}>
      <CircularProgress color="primary" />
    </div>
  );
}
