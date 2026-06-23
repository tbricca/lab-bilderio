import {
  type RegisteredComponent,
  Button,
  Image,
  Text,
  Video,
} from "@builder.io/sdk-react";
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
        localized: true,
      },
    ],
  },

  // Built-in component overrides: re-register Builder's own components so the
  // native rendering is preserved, while forcing their content fields to be
  // localized (localized: true hides the per-field globe toggle in the editor).
  {
    component: Text,
    name: 'Text',
    override: true,
    inputs: [
      {
        name: 'text',
        type: 'html',
        required: true,
        autoFocus: true,
        bubble: true,
        defaultValue: 'Enter some text...',
        localized: true,
      },
    ],
  },
  {
    component: Button,
    name: 'Core:Button',
    override: true,
    inputs: [
      {
        name: 'text',
        type: 'text',
        defaultValue: 'Click me!',
        bubble: true,
        localized: true,
      },
      { name: 'link', type: 'url', bubble: true },
      {
        name: 'openLinkInNewTab',
        type: 'boolean',
        defaultValue: false,
        friendlyName: 'Open link in new tab',
      },
    ],
  },
  {
    component: Image,
    name: 'Image',
    override: true,
    inputs: [
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
        required: true,
        bubble: true,
        localized: true,
      },
      {
        name: 'altText',
        type: 'string',
        helperText: 'Text to display when the user has images off',
        localized: true,
      },
      {
        name: 'backgroundSize',
        type: 'text',
        defaultValue: 'cover',
        enum: ['cover', 'contain'],
      },
      { name: 'backgroundPosition', type: 'text', defaultValue: 'center' },
      { name: 'height', type: 'number', hideFromUI: true },
      { name: 'width', type: 'number', hideFromUI: true },
      { name: 'sizes', type: 'string', hideFromUI: true },
      { name: 'srcset', type: 'string', hideFromUI: true },
      { name: 'lazy', type: 'boolean', defaultValue: true, hideFromUI: true },
      { name: 'fitContent', type: 'boolean', defaultValue: true },
      { name: 'aspectRatio', type: 'number', advanced: true },
    ],
  },
  {
    component: Video,
    name: 'Video',
    override: true,
    inputs: [
      {
        name: 'video',
        type: 'file',
        allowedFileTypes: ['mp4'],
        required: true,
        bubble: true,
        localized: true,
      },
      {
        name: 'posterImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'png'],
        helperText: 'Image to show before the video plays',
        localized: true,
      },
      { name: 'autoPlay', type: 'boolean', defaultValue: true },
      { name: 'controls', type: 'boolean', defaultValue: false },
      { name: 'muted', type: 'boolean', defaultValue: true },
      { name: 'loop', type: 'boolean', defaultValue: true },
      { name: 'playsInline', type: 'boolean', defaultValue: true },
      {
        name: 'fit',
        type: 'text',
        defaultValue: 'cover',
        enum: ['contain', 'cover', 'fill', 'auto'],
      },
      {
        name: 'preload',
        type: 'text',
        defaultValue: 'metadata',
        enum: ['auto', 'metadata', 'none'],
      },
      { name: 'fitContent', type: 'boolean', defaultValue: true, advanced: true },
      { name: 'position', type: 'text', defaultValue: 'center' },
      { name: 'height', type: 'number', advanced: true },
      { name: 'width', type: 'number', advanced: true },
      { name: 'aspectRatio', type: 'number', advanced: true },
      {
        name: 'lazyLoad',
        type: 'boolean',
        helperText: 'Load this video lazily',
        defaultValue: true,
        advanced: true,
      },
    ],
  },
];
