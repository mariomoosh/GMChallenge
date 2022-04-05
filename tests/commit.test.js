import React from "react";
import renderer from "react-test-renderer";
import CommitsList from "../src/components/commits-list";
import CommitDetail from "../src/components/commit-detail";

test('CommitsList renders correctly', () => {
    const tree = renderer.create(<CommitsList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('CommitsList renders correctly', () => {
    const tree = renderer.create(<CommitDetail route={{params:{id:0,title:"home",author:"",message:""}}}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });