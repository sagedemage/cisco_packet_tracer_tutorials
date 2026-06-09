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
      { text: 'Branch Network', link: '/tutorials/branch_network.html' },
      { text: 'OSPF Single Area Network', link: '/tutorials/ospf_single_area_network.html' },
      { text: 'DHCP Server Configuration', link: '/tutorials/dhcp_server_configuration.html' },
      { text: 'Configure a Wireless Network', link: '/tutorials/configure_wireless_network.html' },
      { text: 'RIPv2 Routing Configuration', link: '/tutorials/ripv2_routing_configuration.html' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/wan_network_tutorial_cisco_packet_tracer' }
    ]
  }
})
