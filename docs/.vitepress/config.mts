import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cisco Packet Tracer Tutorials",
  description: "Tutorials on using Cisco Packet Tracer.",
  base: "/cisco_packet_tracer_tutorials/",
  head: [['link', { rel: 'icon', href: 'favicon/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: "1.0 Network Fundamentals",
        items : [
          { text: 'IPv4 Address Configuration and Verification', link: '/tutorials/ipv4_address_configuration_and_verification.html' },
          { text: 'IPv6 Address Configuration and Verification', link: '/tutorials/ipv6_address_configuration_and_verification.html' },
          { text: 'Configure a Wireless Network', link: '/tutorials/configure_wireless_network.html' },
        ]
      },
      {
        text: "2.0 Network Access",
        items : [
          { text: 'Wireless LAN Network with Wireless LAN Controller', link: '/tutorials/wireless_lan_network_with_wireless_lan_controller.html' },
        ]
      },
      {
        text: "3.0 IP Connectivity",
        items : [
          { text: 'Configure IPv4 Static Routing', link: '/tutorials/configure_ipv4_static_routing.html' },
          { text: 'Configure IPv6 Static Routing', link: '/tutorials/configure_ipv6_static_routing.html' },
          { text: 'Configure and Verify Single Area OSPFv2', link: '/tutorials/configure_and_verify_single_area_ospfv2.html' },
        ]
      },
      {
        text: "4.0 IP Services",
        items : [
          { text: 'Configure and Verify Inside Source NAT', link: '/tutorials/configure_and_verify_inside_source_nat.html' },
          { text: 'Configure and Verify NTP', link: '/tutorials/configure_and_verify_ntp.html' },
          { text: 'Configure DHCP Client and Relay', link: '/tutorials/configure_dhcp_client_and_relay.html' },
          { text: 'Configure Syslog', link: '/tutorials/configure_syslog.html' },
          { text: 'Configure SSH', link: '/tutorials/configure_ssh.html' },
        ]
      },
      {
        text: "5.0 Security Fundamentals",
        items : [

        ]
      },
      {
        text: "Extra Tutorials",
        items : [
          { text: 'Configure Router as DHCP Server', link: '/tutorials/configure_router_as_dhcp_server.html' },
          { text: 'RIPv2 Routing Configuration', link: '/tutorials/ripv2_routing_configuration.html' },
        ]
      },
      {
        text: "Advanced Tutorials",
        items : [
          { text: 'Configure ISP Network', link: '/tutorials/configure_isp_network.html' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/wan_network_tutorial_cisco_packet_tracer' }
    ]
  }
})
