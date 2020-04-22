import { IPUtility } from "./../ip-utility";

const ipUtil: IPUtility = new IPUtility();

test('should provide a number from ip address', () => {
    expect(ipUtil.getIPAddress2Number("1.2.3.4")).toBe(16909060);
});

test('should provide IP address from number', () => {
    expect(ipUtil.number2IPAddress(16909060)).toBe("1.2.3.4");
});

test("should IP address be in range", () => {
    let checkIP: string = "192.168.1.20";
    let subnetMask: string = "128.0.0.0";
    expect(ipUtil.isIPInSubnetRange(checkIP, subnetMask)).toBeTruthy();
});

test("should IP address be in range for subnet mask with CIDR prefix", () => {
    let checkIP: string = "192.168.1.20";
    let subnetMask: string = "128.0.0.0/1";
    expect(ipUtil.isIPInSubnetRange(checkIP, subnetMask)).toBeTruthy();
});

test("should generate a range of IP addresses", () => {
    let checkIP: string = "192.168.1.20";
    let subnetMask: string = "128.0.0.0";
    let totalIPs2Generate = 1024;

    let generatedIPs: string[] = ipUtil.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate);
    expect(generatedIPs.length).toBe(1024);
});

test("should throw error for a range of IP addresses for ip address not in range", () => {
    let checkIP: string = "1.2.3.4";
    let subnetMask: string = "255.255.255.252";
    let totalIPs2Generate = 1024;

    expect(() => {
        ipUtil.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate)
    }).toThrow(RangeError);

});

test("should generate a range of 2 IP addresses", () => {
    let checkIP: string = "255.255.255.252";
    let subnetMask: string = "255.255.255.252";
    let totalIPs2Generate = 1024;

    let generatedIPs: string[] = ipUtil.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate);
    expect(generatedIPs.length).toBe(3);
});

test("should throw error for a range of 2000 IP addresses", () => {
    let checkIP: string = "1.2.3.4";
    let subnetMask: string = "255.255.255.252";
    let totalIPs2Generate = 2000;

    expect(() => {
        ipUtil.getRangeOfIPAddress(checkIP, subnetMask, totalIPs2Generate)
    }).toThrow(RangeError);

});
