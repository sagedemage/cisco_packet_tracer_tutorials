# Configure Router as DHCP Server

This is a guide to configure the router as a DHCP server.

![Configure Router as DHCP Server](../images/Configure_Router_as_DHCP_Server.png)

List of Devices:
- PC:
	- Model Name: PC-PT
	- Quantity: 6
- Switch:
	- Model Name: Switch-PT
	- Quantity: 2
- Router:
	- Model Name: Router-PT
	- Quantity: 1

## IP Address Table for the Routers

Router0:
- FastEthernet0/0: 
    - IPv4 Address: 172.168.10.1
    - Subnet Mask: 255.255.255.0
- FastEthernet1/0:
    - IPv4 Address: 192.168.10.1
    - Subnet Mask: 255.255.255.0

## Configure IP Addresses for the Router

Configuring Router with IPv4 Address and Subnet Mask.

Interface FastEthernet0/0 for Router0:
```
Would you like to enter the initial configuration dialog? [yes/no]: no
Router> enable
Router# conf t
Router(config)# interface fastethernet 0/0
Router(config-if)# ip address 172.168.10.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit
```

Interface FastEthernet1/0 for Router0:
```
Router(config)# interface fastethernet 1/0
Router(config-if)# ip address 192.168.10.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit
```

## Configure DHCP for the Router

Configure DHCP on Router0.

Create a DHCP pool called `Pool0DHCP` with the following IP addresses for the network, default-router, and dns-server.

Router0:
```
Router> enable
Router# conf t
Router0(config)#ip dhcp excluded-address 172.168.10.1 172.168.10.50
Router(config)#ip dhcp pool Pool0DHCP
Router(dhcp-config)#network 172.168.10.0 255.255.255.0
Router(dhcp-config)#default-router 172.168.10.1
Router(dhcp-config)#dns-server 172.168.10.1
Router(dhcp-config)#exit
```

Create another DHCP pool called `Pool1DHCP` with the following IP addresses for the network, default-router, and dns-server.

Router0:
```
Router0(config)#ip dhcp excluded-address 192.168.10.1 192.168.10.50
Router(config)#ip dhcp pool Pool1DHCP
Router(dhcp-config)#network 192.168.10.0 255.255.255.0
Router(dhcp-config)#default-router 192.168.10.1
Router(dhcp-config)#dns-server 192.168.10.1
Router(dhcp-config)#exit
```

## Enable DHCP for the PCs

Configure the PCs and change the IP configuration.
1. To assign an IP address in PC0, click on PC0.
2. Go to "Desktop" -> "IP configuration" and you will find the IPv4 configuration.
3. Change its state from static to DHCP.
4. It should automatically fetch the data and configure itself.
5. Repeat the same steps with the other PCs.

## Save Router Configuration
Go to Router0 and save the running configuration to the startup configuration.
```
Router#copy running-config startup-config
```

## Resource
- [Configure Cisco router as DHCP server - study-ccna.com](https://study-ccna.com/configure-cisco-router-as-dhcp-server/)