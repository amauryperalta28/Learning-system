import { Button, Space } from "antd";
import Tabs from "antd/lib/tabs"
import { useState } from "react";
import { Link } from "react-router-dom";
import { TaskTrainingList } from "../../shared/components";
import { VideoTrainingList as VideoTrainingList } from "../../shared/components/VideoTrainingList/VideoTrainingList"

const { TabPane } = Tabs;

export const HomePage = () => {
    const [seeAllLinkRoute, setSeeAllLinkRoute] = useState('/tasks')
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
                    <VideoTrainingList key="featuredTrainingList" sectionName="Featured" />
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
                            <VideoTrainingList key="discoverTrainingList" />
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </>

    )
}