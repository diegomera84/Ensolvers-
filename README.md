# Ensolvers

# JMeter Testing files

Check:

* https://jmeter.apache.org/usermanual/index.html
* https://jmeter.apache.org/usermanual/best-practices.html

#### Load example:

       jmeter -t Test_Plan_QA_challenge.jmx

No-UI mode:

    jmeter -n -t  Test_Plan_QA_challenge.jmx -l /tmp/base_result.jtl -e

### Testing

Create files for API & case testing

### Guideline

* Create .csv files or `User Defined Variables` sections in your test
* Use DEV envs for testing
* Add information about how to run your test in this file ( or file in the same dir as you test, for example: testCase1.jmx & testCase1.md)

## Test cases

#### Test_Plan_QA_challenge
* Basic web test
* No configs or api state required
