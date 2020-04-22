# Check IP Address with Subnetmask using Node with Jest unit testing

This is an example project which performs the followings

* Check whether a particular IP address is in a subnet mask range
* Generate a range of IP address from an initial IP address, subnetmask and range

# How to run and test

Use the following command to test.

`yarn install && yarn build && yarn test`

# Technicalities
Refer to the class `ip-utility.ts`. Exported class name is `IPUtility`

Refer to the script docs for the following.

`isIPInSubnetRange(ipAddress: string, subnetMask: string)`

The above method provides the information in boolean type whether IP address is in subnet mask range or not.

`getRangeOfIPAddress(initialIPAddress: string, subnetMask: string, range: number)`

The above method provides an array of IP addresses for a range with initial IP address, subnet mask and the number of IP addresses to generate.


# Comments
Since I am using Facebook Jest for test framework, you can refer to the class `test-utility.spec.ts` for various test cases.

# Do not

Do not run this command `yarn start` as I did not provide direct run rather I have provided unit test cases with code coverage.

# Author
Debadatta Mishra (deba.java@gmail.com)