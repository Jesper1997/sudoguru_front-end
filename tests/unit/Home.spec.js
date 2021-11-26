import { mount } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home"


//Group of tests
describe("Home.vue", () => {
    //It == testBlock
    it("renders easy mode select", async () => {
        //The component that you wnat to test
        const wrapper = shallowMount(Home)
        const h3 = wrapper.find('h3')
        //The assertion
        await wrapper.find('b-button.easy').trigger('click')
        expect(h3.text()).toContain("easy")
    })

    it("renders medium mode", async () => {
        //The component that you wnat to test
        const wrapper = shallowMount(Home)
        const h3 = wrapper.find('h3')
        //The assertion
        await wrapper.find('b-button.medium').trigger('click')
        expect(h3.text()).toContain("medium")
    })

    it("renders hard mode", async () => {
        //The component that you wnat to test
        const wrapper = shallowMount(Home)
        const h3 = wrapper.find('h3')
        //The assertion
        await wrapper.find('b-button.hard').trigger('click')
        expect(h3.text()).toContain("hard")
    })
})