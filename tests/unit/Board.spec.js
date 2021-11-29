import { mount } from "@vue/test-utils";
//import { shallowMount } from "@vue/test-utils";
import Board from "@/components/Board";
import { Object } from "core-js";
import Vue from "vue";


//Group of tests
describe("Board.vue", () => {
    //It == testBlock
    it("Select Number", async () => {
        var squares = [];
        let count = 0;

        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                var square = {
                    correct: true,
                    id: count,
                    value: 0,
                    x: x,
                    y: y
                };
                squares[count] = square;
                count++;
            }
        }
        const playboard =  {squares}
        //The component that you wnat to test
        const wrapper = mount(Board, {
            data: function() {
                return {
                    BoardViewModel: playboard
                }
            },  
        })
        console.log(wrapper)
        await wrapper.find('b-button.rightsidebar').trigger('click')
        await wrapper.find("b-button.number1").trigger('click')
        //The assertion
        console.log(wrapper.vm.pickednumber);
        expect(wrapper.vm.pickednumber).toBe(1)
    })
})