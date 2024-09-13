import { createRouter } from "@tanstack/react-router";

import { routeTree } from "./tree.gen";

export const router = createRouter({ routeTree });
