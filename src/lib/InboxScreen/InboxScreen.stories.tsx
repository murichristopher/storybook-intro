import React from "react";
import InboxScreen from "./InboxScreen";
import store from "../store";
import { rest } from "msw";
import { MockedState } from "../TaskList/TaskList.stories.tsx";

import { Provider } from "react-redux";

import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from "@storybook/test";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (_req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));

    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  },
};
export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (_req, res, ctx) => {
            return res(ctx.status(403));
          }
        ),
      ],
    },
  },
};

// # TODO: Add loading screen
// export const Loading = {
//   parameters: {
//     msw: {
//       handlers: [
//         rest.get(
//           "https://jsonplaceholder.typicode.com/todos?userId=1",
//           (_req, res, ctx) => {
//             return res(ctx.status(403));
//           }
//         ),
//       ],
//     },
//   },
// };
