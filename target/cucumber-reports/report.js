$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ExpediaBooking.feature");
formatter.feature({
  "name": "Expedia various types of booking",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As a user I want to search hotel in Expedia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am navigated to Expedia",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ExpediaHome.navigateToExpedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose hotel booking tab",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ExpediaHome.iChooseHotelBookingTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide hotel booking information",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ExpediaHome.iProvideHotelBookingInformation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to view list of hotel search result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.SearchResult.navigateToExpedia()"
});
formatter.result({
  "status": "passed"
});
});