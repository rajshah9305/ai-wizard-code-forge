
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#000000',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F8FAFC',
					foreground: '#000000'
				},
				accent: {
					DEFAULT: '#FF6B35',
					foreground: '#FFFFFF'
				},
				success: {
					DEFAULT: '#22C55E',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F8FAFC',
					foreground: '#64748B'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#000000'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#000000'
				},
				sidebar: {
					DEFAULT: '#FFFFFF',
					foreground: '#000000',
					primary: '#000000',
					'primary-foreground': '#FFFFFF',
					accent: '#F8FAFC',
					'accent-foreground': '#000000',
					border: '#E2E8F0',
					ring: '#FF6B35'
				}
			},
			borderRadius: {
				lg: '12px',
				md: '8px',
				sm: '4px'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
			},
			fontSize: {
				'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
				'hero': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
				'title': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
				'subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'code-stream': {
					'0%': { width: '0ch' },
					'100%': { width: '100ch' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'grid-fade': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'code-stream': 'code-stream 2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'grid-fade': 'grid-fade 0.8s ease-out'
			},
			boxShadow: {
				'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'premium-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
				'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
