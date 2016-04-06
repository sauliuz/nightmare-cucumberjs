Feature:
	I would like to monitor several websites
	and validate that their titles are as expected.

	Scenario: httpbin.org website should be up and running
		Given I visit httpbin.org website
		Then website title should be "httpbin(1): HTTP Client Testing Service"

	Scenario: github.com website should be up and running
		Given I visit github.com website
		Then website title should be "How people build software · GitHub"

	Scenario: wikipedia.org site should be up and running
		Given I visit www.wikipedia.org website
		Then website title should be "Wikipedia"