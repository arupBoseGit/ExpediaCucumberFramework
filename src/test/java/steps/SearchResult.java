package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class SearchResult {

    @Then("^I should be able to view list of hotel search result$")
    public void navigateToExpedia(){
        System.out.println("Hotel list shown");
    }

}
