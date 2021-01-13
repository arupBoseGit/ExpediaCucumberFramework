package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ExpediaHome {
        @Given("^I am navigated to Expedia$")
        public void navigateToExpedia(){
            System.out.println("Navigate to Expedia");
        }

    @When("I choose hotel booking tab")
    public void iChooseHotelBookingTab() {
        System.out.println("I choose Hotel Booking Tab");
    }

    @And("I provide hotel booking information")
    public void iProvideHotelBookingInformation() {
        System.out.println("I provide Hotel booking information");
    }
}

