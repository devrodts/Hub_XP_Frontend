import type { StoryFn, Meta } from "@storybook/react"
import Form from "../components/Form/Form"

export default {
  title: "Components/Form",
  component: Form,
} as Meta

const Template: StoryFn = (args: any) => <Form {...args} />

export const Default = Template.bind({})
Default.args = {
  fields: [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ],
  onSubmit: (data: any) => console.log(data),
}

