import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Component, ReactNode } from 'react';

interface P {
  children: ReactNode;
}

interface S {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<P, S> {
  public state: S;

  constructor(props: P) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error.name);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '5px',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card style={{ width: '100%', height: '100%' }}>
            <CardContent>
              <Typography variant='h5' color='textSecondary' align='left'>
                Error
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'right' }}>
                <Button color='error' onClick={() => this.setState({ hasError: false })}>
                  Retry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
