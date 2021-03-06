import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Item } from "..";
import { Detail } from "../../../components";

configure({ adapter: new Adapter() });

describe('PAGES  ITEM', () => {
    const mockFn = jest.fn();

    const props = {
        getDetailItem: mockFn,
        match: { params: { id: 1 } },
        item: { data: 'text...'},
        location: { pathname: '/paths/1'},
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Item {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('Component is return 1 content', () => {
        expect(wrapper.find(Detail)).toHaveLength(1);
    });
     it('function should be called in componentDidMount', () => {
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
});

// npm run test src/pages/Item