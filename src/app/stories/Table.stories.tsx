import type { StoryFn, Meta } from "@storybook/react"
import Table from "../components/Table/page"

export default {
  title: "Components/Table",
  component: Table,
} as Meta

const Template: StoryFn = (args: any) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  columns: [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
  ],
  rows: [
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "China", code: "CN", population: 1403500365, size: 9596961 },
    { name: "Italy", code: "IT", population: 60483973, size: 301340 },
  ],
}

