import { type RegisteredComponent } from "@builder.io/sdk-react";
import FallbackBuilderioComponent from "./FallbackBuilderioComponent";

export const customComponents: RegisteredComponent[] = [
  {
    component: FallbackBuilderioComponent,
    name: 'Hero section',
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Hero section',
      },
    ],
  },
];