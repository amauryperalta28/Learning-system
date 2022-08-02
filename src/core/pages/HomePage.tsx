import { Space } from "antd";
import Tabs from "antd/lib/tabs"
import { TrainingList as TrainingList } from "../../shared/TrainingList/TrainingList"

const { TabPane } = Tabs;

export const HomePage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <TrainingList sectionName="Featured" />

                </div>

                <div className="row">


                    <Tabs className="mt-5" defaultActiveKey="1" size="large">
                        <TabPane tab="TASKS" key="1">
                            Tasks
                        </TabPane>
                        <TabPane tab="DISCOVER" key="2">
                            Discover
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </>

    )
}