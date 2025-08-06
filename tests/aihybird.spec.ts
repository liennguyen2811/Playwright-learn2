// @ts-check
const { test, expect } = require('@playwright/test');
import { ai } from "@zerostep/playwright";

test('GREENKART AI Testing', async ({ page }) => {
  const aiArgs = { page, test }
  // await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  // const text = await ai("What is the Discount price of Tomato", aiArgs)
  // expect(text).toEqual("26")
  // const text1 = await ai("What is the Price of Tomato", aiArgs)
  // expect(text1).toEqual("37")

  // const diff = await ai("What is the value difference between Price and Discount price of Tomato", aiArgs);
  // expect(diff).toEqual("11");

  await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
  const blinkingText = await ai("Get blinking Text in the page", aiArgs);
  await console.log("Blinking Text:", blinkingText);
  await expect(blinkingText).toEqual("Flight Status");

  const firstValue = await ai('Split ${blinkingText} with "/" and give 0th index value', aiArgs);
  await console.log(firstValue);
  expect(firstValue).toEqual("Free Access to InterviewQues/ResumeAssistance/Material");


});
