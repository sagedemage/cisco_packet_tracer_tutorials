# Configure and Verify Single Area OSPFv2

This is a guide to configure and verify Single Area OSPFv2.

![OSPF Single Area Network](../images/Configure_and_Verify_Single_Area_OSPFv2.png)

List of Devices:
- PC:
	- Model Name: PC-PT
	- Quantity: 3
- Switch:
	- Model Name: Switch-PT
	- Quantity: 3
- Router:
	- Model Name: 2911
	- Quantity: 3

## IP Address Table for the PCs
PC1:
- IPv4 Address: 192.168.1.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.1.1

PC2:
- IPv4 Address: 192.168.2.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.2.1

PC3:
- IPv4 Address: 192.168.3.2
- Subnet Mask: 255.255.255.0
- Default Gateway: 192.168.3.1

## IP Address Table for the Routers
R1:
- GigabitEthernet0/0
	- IPv4 Address: 192.168.1.1
	- Subnet Mask: 255.255.255.0
- Serial0/0/0
	- IPv4 Address: 10.1.1.2
	- Subnet Mask: 255.255.255.0

R2:
- GigabitEthernet0/0
	- IPv4 Address: 192.168.2.1
	- Subnet Mask: 255.255.255.0
- Serial0/0/0
	- IPv4 Address: 10.1.1.1
	- Subnet Mask: 255.255.255.0
- Serial0/0/1
	- IPv4 Address: 10.1.2.1
	- Subnet Mask: 255.255.255.0

R3:
- GigabitEthernet0/0
	- IPv4 Address: 192.168.3.1
	- Subnet Mask: 255.255.255.0
- Serial0/0/0
	- IPv4 Address: 10.1.2.2
	- Subnet Mask: 255.255.255.0

## Configure IP Addresses for the Routers
Configure the IP addresses for the interfaces of the routers.

For each 2911 router, go to the Physical tab. Add the interface, HWIC-2T, to the router. This provides you access to serial ports required for routing.

Interface GigabitEthernet0/0 for R1:
```
R1>en
R1#config t
R1(config)#int Gig0/0
R1(config-if)#ip add 192.168.1.1 255.255.255.0
R1(config-if)#no shut
R1(config-if)#exit
```

Interface Serial0/0/0 for R1:
```
R1(config)#int Se0/0/0
R1(config-if)#ip add 10.1.1.2 255.255.255.0
R1(config-if)#no shut
R1(config-if)#end
```

Interface GigabitEthernet0/0 for R2:
```
R2>en
R2#config t
R2(config)#int Gig0/0
R2(config-if)#ip add 192.168.2.1 255.255.255.0
R2(config-if)#no shut
R2(config-if)#exit
```

Interface Serial0/0/0 for R2:
```
R2(config)#int Se0/0/0
R2(config-if)#ip add 10.1.1.1 255.255.255.0
R2(config-if)#no shut
R2(config-if)#exit
```

Interface Serial0/0/1 for R2:
```
R2(config)#int Se0/0/1
R2(config-if)#ip add 10.1.2.1 255.255.255.0
R2(config-if)#no shut
R2(config-if)#end
```

Interface GigabitEthernet0/0 for R3:
```
R3>en
R3#config t
R3(config)#int Gig0/0
R3(config-if)#ip add 192.168.3.1 255.255.255.0
R3(config-if)#no shut
R3(config-if)#exit
```

Interface Serial0/0/0 for R3:
```
R3(config)#int Se0/0/0
R3(config-if)#ip add 10.1.2.2 255.255.255.0
R3(config-if)#no shut
R3(config-if)#end
```

## Configure IP Addresses for the PCs

Go to Desktop -> IP Configuration. Set the **IPv4 Address**, and **Default Gateway** for each PC.
Make sure the IP addresses of the PCs matches with the information at the *IP Address Table for the PCs*
section.

## Configure Dynamic Routing via OSPF

Configure the dynamic routes to the routers.

R1:
```
R1#conf t
R1(config)#router ospf 1
R1(config-router)#network 10.1.1.0 0.0.0.255 area 0
R1(config-router)#network 192.168.1.0 0.255.255.255 area 0
R1(config-router)#end
```

R2:
```
R2#conf t
R2(config)#router ospf 1
R2(config-router)#network 10.1.1.0 0.0.0.255 area 0
R2(config-router)#network 10.1.2.0 0.0.0.255 area 0
R2(config-router)#network 192.168.2.0 0.255.255.255 area 0
R2(config-router)#end
```

R3:
```
R3#conf t
R3(config)#router ospf 1
R3(config-router)#network 10.1.2.0 0.0.0.255 area 0
R3(config-router)#network 192.168.3.0 0.255.255.255 area 0
R3(config-router)#end
```

## Check Connectivity Between PCs

Ping each PC to check if the three PCs can communicate with each other.

## Save Router Configurations
Go to each router and save the running configuration to the startup configuration.

Save config for R1:
```
R1#copy running-config startup-config
```

Save config for R2:
```
R2#copy running-config startup-config
```

Save config for R3:
```
R3#copy running-config startup-config
```

## Resources
- [OSPF Implementation - GeeksforGeeks](https://www.geeksforgeeks.org/computer-networks/ospf-implementation/)