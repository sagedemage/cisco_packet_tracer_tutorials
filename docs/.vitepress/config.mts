import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WAN Network Tutorial - Cisco Packet Tracer",
  description: "This is a guide to implement a WAN network in Cisco Packet Tracer.",
  base: "/wan_network_tutorial_cisco_packet_tracer/",
  head: [['link', { rel: 'icon', href: 'favicon/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Branch Network', link: '/tutorials/branch_network.html' },
      { text: 'OSPF Single Area Network', link: '/tutorials/ospf_single_area_network.html' },
      { text: 'DHCP Server Configuration', link: '/tutorials/dhcp_server_configuration.html' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/wan_network_tutorial_cisco_packet_tracer' }
    ]
  }
})
