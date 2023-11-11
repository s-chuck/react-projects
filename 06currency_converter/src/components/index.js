// This approach in which we create a new js file just to write the imports and exports of all components are prefered in big projects to make it less complicated.
//This is also useful to import all the components in one go if you have many components so to use them in another location you have to write individual import but using this we can import all the component only just by using one line of code.
import InputBox from "./InputBox";

export {InputBox}