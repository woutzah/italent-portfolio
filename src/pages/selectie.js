import React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import Layout from "../components/layout"

export default function SelectiePage() {
  return (
    <Layout>
      <h1 className="title-center">Selectie</h1>
      <Tabs>
        <TabList
          id="tabs"
          defaultIndex={`2`}
          className=".react-tabs__tab--selected"
        >
          <Tab>Innovatieroute UI/UX</Tab>
          <Tab>Hackathon: Google Hash Code</Tab>
          <Tab>Woolly Development</Tab>
        </TabList>
        <div id="panels">
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </div>
      </Tabs>
    </Layout>
  )
}
