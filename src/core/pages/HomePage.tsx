import Tabs from "antd/lib/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FeaturedTrainingList, TaskTrainingList } from "@shared/components";
import { DiscoverTrainingList } from "@shared/components/DiscoverTrainingList/DiscoverTrainingList";

const { TabPane } = Tabs;

export const HomePage = () => {
    const [seeAllLinkRoute, setSeeAllLinkRoute] = useState('/trainings/tasks')
    const operations = <Link to={seeAllLinkRoute} style={{ marginRight: '40px', textDecoration: 'underline', color: 'black' }}>See all &gt;</Link>;
    const TasksTab = '1';

    const onChangeTab = (activeKey: string) => {

        if (activeKey === TasksTab) {
            setSeeAllLinkRoute('/tasks');
        } else {
            setSeeAllLinkRoute('/trainings');
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <FeaturedTrainingList/>
                </div>

                <div className="row">
                    <Tabs tabBarExtraContent={operations}
                        tabBarStyle={{ fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif" }}
                        className="mt-5"
                        defaultActiveKey="1"
                        size="large"
                        onChange={onChangeTab}
                    >
                        <TabPane tab="TASKS" key="1">
                            <TaskTrainingList />
                        </TabPane>
                        <TabPane tab="DISCOVER" key="2">
                            <DiscoverTrainingList/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </>

    )
}