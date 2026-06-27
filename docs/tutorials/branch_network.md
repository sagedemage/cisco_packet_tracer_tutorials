# Branch Network

This is a guide to setup a branch network.

![Branch Network](../images/Branch_Network.png)

List of Devices:
- PC:
	- Model Name: PC-PT
	- Quantity: 4
- Switch:
	- Model Name: Switch-PT
	- Quantity: 4
- Router:
	- Model Name: Router-PT
	- Quantity: 4
- Multilayer Switch:
	- Model Name: 3560-24PS
	- Quantity: 5

## IP Address Table for the PCs
PC0:
- IPv4 Address: 192.168.1.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.1.1

PC1:
- IPv4 Address: 192.168.2.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.2.1

PC2:
- IPv4 Address: 192.168.3.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.3.1

PC3:
- IPv4 Address: 192.168.4.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.4.1

## IP Address Table for the Routers
Router0:
- FastEthernet0/0: 10.1.1.1
    - Subnet Mask: 255.255.255.0
- FastEthernet1/0: 192.168.1.1
    - Subnet Mask: 255.255.255.0

Router1:
- FastEthernet0/0: 10.1.1.2
    - Subnet Mask: 255.255.255.0
- FastEthernet1/0: 192.168.2.1
    - Subnet Mask: 255.255.255.0

Router2:
- FastEthernet0/0: 10.1.1.3
    - Subnet Mask: 255.255.255.0
- FastEthernet1/0: 192.168.3.1
    - Subnet Mask: 255.255.255.0

Router3:
- FastEthernet0/0: 10.1.1.4
    - Subnet Mask: 255.255.255.0
- FastEthernet1/0: 192.168.4.1
    - Subnet Mask: 255.255.255.0

## Configure IP Addresses for the PCs

Go to Desktop -> IP Configuration. Set the **IPv4 Address**, and **Default Gateway** for each PC.
Make sure the IP addresses of the PCs matches with the information at the *IP Address Table for PCs*
section.

## Configure IP Addresses for the Routers

Interface FastEthernet0/0 for Router0:
```
Router>en
Router#config t
Router(config)#int FastEthernet0/0
Router(config-if)#ip add 10.1.1.1 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet1/0 for Router0:
```
Router>en
Router#config t
Router(config)#int FastEthernet1/0
Router(config-if)#ip add 192.168.1.1 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet0/0 for Router1:
```
Router>en
Router#config t
Router(config)#int FastEthernet0/0
Router(config-if)#ip add 10.1.1.2 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet1/0 for Router1:
```
Router>en
Router#config t
Router(config)#int FastEthernet1/0
Router(config-if)#ip add 192.168.2.1 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet0/0 for Router2:
```
Router>en
Router#config t
Router(config)#int FastEthernet0/0
Router(config-if)#ip add 10.1.1.3 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet1/0 for Router2:
```
Router>en
Router#config t
Router(config)#int FastEthernet1/0
Router(config-if)#ip add 192.168.3.1 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet0/0 for Router3:
```
Router>en
Router#config t
Router(config)#int FastEthernet0/0
Router(config-if)#ip add 10.1.1.4 255.255.255.0
Router(config-if)#no shut
```

Interface FastEthernet1/0 for Router3:
```
Router>en
Router#config t
Router(config)#int FastEthernet1/0
Router(config-if)#ip add 192.168.4.1 255.255.255.0
Router(config-if)#no shut
```

## Configure Static Routing

Configure static routes for the two routers in order for the PCs to communicate with each other.

Router0:
```
Router>en  
Router#config t 
Router(config)#ip route 192.168.2.0 255.255.255.0 10.1.1.2
Router(config)#ip route 192.168.3.0 255.255.255.0 10.1.1.3
Router(config)#ip route 192.168.4.0 255.255.255.0 10.1.1.4
```

Router1:
```
Router>en  
Router#config t 
Router(config)#ip route 192.168.1.0 255.255.255.0 10.1.1.1
Router(config)#ip route 192.168.3.0 255.255.255.0 10.1.1.3
Router(config)#ip route 192.168.4.0 255.255.255.0 10.1.1.4
```

Router2:
```
Router>en  
Router#config t 
Router(config)#ip route 192.168.1.0 255.255.255.0 10.1.1.1
Router(config)#ip route 192.168.2.0 255.255.255.0 10.1.1.2
Router(config)#ip route 192.168.4.0 255.255.255.0 10.1.1.4
```

Router3:
```
Router>en  
Router#config t 
Router(config)#ip route 192.168.1.0 255.255.255.0 10.1.1.1
Router(config)#ip route 192.168.2.0 255.255.255.0 10.1.1.2
Router(config)#ip route 192.168.3.0 255.255.255.0 10.1.1.3
```

## Save Router Configurations
Go to each router and save the running configuration to the startup configuration.
```
Router#copy running-config startup-config
```

## Resources
- [WAN Technologies Overview (1.1) - Cisco Press](https://www.ciscopress.com/articles/article.asp?p=2832405&seqNum=4)