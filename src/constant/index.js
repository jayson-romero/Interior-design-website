import { fb, linkedin, twitter } from "../assets"

export const user = {
      name: 'Tom Cook',
      email: 'tom@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
export const navigation = [
      { name: 'Services', href: '#', current: true },
      { name: 'Portfolio', href: '#', current: false },
      { name: 'Pricing', href: '#', current: false },
    ]
export const userNavigation = [
      { name: 'Your Profile', href: '#' },
      { name: 'Settings', href: '#' },
      { name: 'Sign out', href: '#' },
    ]
export const socialMedia = [
      { name: 'facebook', href: '#', icon: fb },
      { name: 'linkedin', href: '#', icon: twitter },
      { name: 'twitter', href: '#', icon:  linkedin},
]
    