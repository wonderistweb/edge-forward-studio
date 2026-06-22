import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";
import "./index.css";

export function render(url: string) {
  return renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
}