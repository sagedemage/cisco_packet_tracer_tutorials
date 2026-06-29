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
        text: 'Tutorials',
        items: [
          { text: 'WAN Network', link: '/' },
          { text: 'OSPF Single Area Network', link: '/tutorials/ospf_single_area_network.html' },
          { text: 'Configure Router as DHCP Server', link: '/tutorials/configure_router_as_dhcp_server.html' },
          { text: 'Configure a Wireless Network', link: '/tutorials/configure_wireless_network.html' },
          { text: 'RIPv2 Routing Configuration', link: '/tutorials/ripv2_routing_configuration.html' },
          { text: 'Wireless LAN Network', link: '/tutorials/wireless_lan_network_with_wireless_lan_controller.html' },
          { text: 'IPv6 Configuration and Routing', link: '/tutorials/ipv6_configuration_and_routing.html' },
          { text: 'NAT Configuration and Verification', link: '/tutorials/nat_configuration_and_verification.html' },
          { text: 'Configure DHCP Server and Relay for Routers', link: '/tutorials/configure_dhcp_server_and_relay_for_routers.html' },
          { text: 'Configure ISP Network', link: '/tutorials/configure_isp_network.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/wan_network_tutorial_cisco_packet_tracer' }
    ]
  }
})
