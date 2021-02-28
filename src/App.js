import {
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Grid,
} from "@material-ui/core";
import { PhotoAlbum } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoAlbum />
          <Typography>Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography variant="h5" color="textSecondary" align="center">
              Welcome to Photo Album site
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
