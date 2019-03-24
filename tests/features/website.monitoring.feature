Feature:
	I would like to monitor several websites
	and validate that their home page titles are as expected.

	Scenario: popularowl.com website should be up and running
		Given I visit popularowl.com website
		Then website title should be "PopularOwl - API first tutorials, examples and discussions"

	Scenario: htmlcenter.com website should be up and running
		Given I visit htmlcenter.com website
		Then website title should be "HTMLCenter is about mobile and web development"

	Scenario: wikipedia.org site should be up and running
		Given I visit www.wikipedia.org website
		Then website title should be "Wikipedia"
