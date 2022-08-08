import { TextArea } from "../../../shared/components/TextArea/TextArea";
import { TextInput } from "../../../shared/components/TextInput/TextInput";

export const CreateTrainingPage = () => {
  return (
    <div>
      <h2>Create Training Page</h2>
      <form>
        <div className="container-fluid">

          <TextInput id="title" name="title" label="Title" placeholder="Intro to power app virtuals" />

          <TextInput id="category" name="category" label="Category" placeholder="Power platform"  />

          <TextInput id="length" name="length" label="Length" />

          <TextInput id="instructor" name="instructor" label="Instructor" placeholder="Type the instructor"  />

          <TextInput id="videoUrl" name="videoUrl" label="VideoUrl" placeholder="www.youtube.com/someVideo"  />

         <TextArea  id="description" name="description" label="Description" placeholder="Write a description"  />

        </div>
      </form>
    </div>
  );
};
