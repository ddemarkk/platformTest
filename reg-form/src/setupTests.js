// import * as Enzyme from "enzyme";
// import ReactSixteenAdapter from "enzyme-adapter-react-16";
// //import * as Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

// Enzyme.configure({ adapter: new ReactSixteenAdapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// // global.shallow = shallow;
// // global.render = render;
// // global.mount = mount;
// // global.ReactSixteenAdapter = ReactSixteenAdapter;

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
