import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Square from '@/components/Square.vue'

describe('square.vue', () => {
  it("renders number when given a square", () => { 
    //The component that you wnat to test 
    const wrapper = mount(Square, { 
        propsData: { 
            square: { 
                correct: true, 
                id: 0, 
                value: 1, 
                x: 0, 
                y: 0, 
            }, 
            value: 0 
        } 
    }) 
    //The assertion 
    expect(wrapper.text()).to.include("1") 
  }) 

  it("Change Value of the square", async () => { 
    const wrapper = mount(Square, { 
        propsData: { 
            square: { 
                correct: true, 
                id: 0, 
                value: 1, 
                x: 0, 
                y: 0, 
            }, 
            value: 0 
        } 
    }) 
    await wrapper.find('b-button').trigger('click') 
    expect(wrapper.text()).to.include("0") 
    })
})
