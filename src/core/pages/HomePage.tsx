import { Space } from "antd";
import Tabs from "antd/lib/tabs"
import { TaskTrainingList } from "../../shared/components";
import { VideoTrainingList as VideoTrainingList } from "../../shared/components/VideoTrainingList/VideoTrainingList"

const { TabPane } = Tabs;

export const HomePage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <VideoTrainingList sectionName="Featured" />

                </div>

                <div className="row">
                    <Tabs tabBarStyle={{ fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif" }} className="mt-5" defaultActiveKey="1" size="large">
                        <TabPane tab="TASKS" key="1">
                            <TaskTrainingList />
                        </TabPane>
                        <TabPane tab="DISCOVER" key="2">
                            <VideoTrainingList />
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </>

    )
}