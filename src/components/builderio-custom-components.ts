import { type RegisteredComponent } from "@builder.io/sdk-react";
import FallbackBuilderioComponent from "./FallbackBuilderioComponent";
import TextComponent from "./TextComponent";

export const customComponents: RegisteredComponent[] = [
  {
    component: FallbackBuilderioComponent,
    name: 'Hero section',
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Hero section',
        localized: true,
      },
    ],
  },
  {
    component: TextComponent,
    name: 'Text',
    override: true,
    inputs: [
      {
        name: 'text',
        type: 'html',
        defaultValue: 'Enter some text...',
        localized: true,
      },
    ],
  },
];
