import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as BookOpen, S as Bug, T as ArrowDown, _ as FlaskConical, a as Users, b as Clock, c as Soup, d as Menu, f as Leaf, g as Flower2, h as Hand, i as Waves, l as Scissors, m as Info, n as Wind, p as Layers, r as Wheat, s as Sprout, t as X, u as Repeat, v as Droplets, w as ArrowUp, x as Citrus, y as CupSoda } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwStV8DJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function useInView(threshold = .16) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setInView(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		inView
	};
}
function Reveal({ children, className, delay = 0 }) {
	const { ref, inView } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", inView && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function useCountUp(target, active, duration = 1100) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setValue(target);
			return;
		}
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			setValue(Math.round(target * eased));
			if (t < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		active,
		target,
		duration
	]);
	return value;
}
function SectionHead({ eyebrow, title, subtitle, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-medium text-forest md:text-5xl",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-muted md:text-lg",
				children: subtitle
			}) : null
		]
	});
}
var FALLBACK = {
	"/images/hero-sereh.jpg": "https://images.unsplash.com/photo-1628556270448-4d4e41437e0f?auto=format&fit=crop&w=1200&q=80",
	"/images/about-sereh.jpg": "https://images.unsplash.com/photo-1599909533730-ba82510a913b?auto=format&fit=crop&w=1200&q=80",
	"/images/tea-sereh.jpg": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
	"/images/plant-sereh.jpg": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
	"/images/oil-sereh.jpg": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80",
	"/images/garden-sereh.jpg": "https://images.unsplash.com/photo-1466692476866-aef1db89a1c2?auto=format&fit=crop&w=1600&q=80"
};
function Photo({ src, alt, className, imgClassName, lazy = true }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	const resolved = failed ? FALLBACK[src] ?? src : src;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("img-zoom bg-mist", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: resolved,
			alt,
			loading: lazy ? "lazy" : "eager",
			decoding: "async",
			className: cn("size-full object-cover", imgClassName),
			onError: () => setFailed(true)
		})
	});
}
var COUNTERS = [
	{
		target: 3,
		label: "Senyawa aromatik utama"
	},
	{
		target: 6,
		label: "Pemanfaatan sehari-hari"
	},
	{
		target: 6,
		label: "Langkah menanam"
	},
	{
		target: 5,
		label: "Tips perawatan"
	}
];
function About() {
	const { ref, inView } = useInView(.3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tentang",
		className: "bg-surface py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: "/images/about-sereh.jpg",
				alt: "Makro batang sereh merah dengan pangkal kemerahan dan daun hijau beraroma",
				className: "aspect-4/3 rounded-2xl shadow-soft"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						align: "left",
						eyebrow: "Pengertian",
						title: "Apa Itu Sereh Merah?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-base leading-relaxed text-muted md:text-lg",
						children: [
							"Sereh merah (",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Cymbopogon nardus" }),
							") adalah jenis tumbuhan rumput-rumputan aromatik yang bagian daun dan batangnya kaya akan",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mark",
								children: "minyak atsiri"
							}),
							", terutama senyawa",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mark",
								children: "sitronelal"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mark",
								children: "sitronelol"
							}),
							", dan ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mark",
								children: "geraniol"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Tanaman ini tumbuh dalam rumpun, menyukai cahaya matahari, dan banyak dibudidayakan karena aroma sitronella-nya yang khas — digunakan dalam minuman herbal, produk pewangi, hingga bahan baku minyak serai wangi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							"Aromatic",
							"Essential Oil",
							"Perennial Grass"
						].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold tracking-wide text-leaf uppercase",
							children: tag
						}, tag))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "wrap mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
			children: COUNTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterCard, {
				target: item.target,
				label: item.label,
				active: inView
			}, item.label))
		})]
	});
}
function CounterCard({ target, label, active }) {
	const n = useCountUp(target, active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-bg px-4 py-5 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-4xl font-medium tabular-nums text-forest",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: label
		})]
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 480);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Kembali ke atas",
		className: cn("fixed right-5 bottom-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-forest text-cream shadow-soft transition-all duration-200", show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
	});
}
var BENEFITS = [
	{
		n: "01",
		icon: FlaskConical,
		title: "Sumber Minyak Atsiri",
		text: "Ekstrak daun dan batangnya kaya akan senyawa seperti sitronelal dan geraniol yang menjadi bagian penting dalam produksi minyak serai wangi untuk berbagai kebutuhan industri."
	},
	{
		n: "02",
		icon: Bug,
		title: "Repelan Nyamuk",
		text: "Aroma khas citronella banyak dimanfaatkan dalam produk pengusir nyamuk dan serangga."
	},
	{
		n: "03",
		icon: Hand,
		title: "Relaksasi dan Pijat",
		text: "Minyak citronella dapat dimanfaatkan dalam produk aromaterapi dan minyak pijat untuk memberikan sensasi aroma yang menyegarkan dan relaksasi."
	},
	{
		n: "04",
		icon: Soup,
		title: "Pemanfaatan Tradisional untuk Pencernaan",
		text: "Air rebusan sereh secara tradisional digunakan oleh sebagian masyarakat sebagai minuman herbal untuk membantu memberikan rasa nyaman setelah makan."
	},
	{
		n: "05",
		icon: CupSoda,
		title: "Minuman Herbal",
		text: "Sereh dapat digunakan sebagai bahan minuman herbal dan dapat dikombinasikan dengan jahe, madu, atau jeruk nipis."
	},
	{
		n: "06",
		icon: Wind,
		title: "Aromaterapi",
		text: "Aroma sereh banyak dimanfaatkan dalam produk aromaterapi, pewangi, dan produk perawatan tubuh."
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "manfaat",
		className: "bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Pemanfaatan",
					title: "Manfaat dan Pemanfaatan Sereh Merah",
					subtitle: "Beragam cara sereh merah hadir di dapur, kebun, dan industri — tanpa klaim medis."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
					children: BENEFITS.map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i % 3 * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "card-lift flex h-full flex-col rounded-2xl bg-bg p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-11 items-center justify-center rounded-xl bg-mist text-leaf",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-5",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl text-citron",
											children: item.n
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-xl font-medium text-forest",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted md:text-base",
										children: item.text
									})
								]
							})
						}, item.n);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "mt-8 flex gap-3 rounded-2xl border border-border bg-mist/70 px-5 py-4 text-sm text-leaf",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						className: "mt-0.5 size-5 shrink-0",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Informasi manfaat pada halaman ini bersifat edukatif dan menggambarkan penggunaan tradisional maupun pemanfaatan umum. Informasi ini bukan pengganti diagnosis, pengobatan, atau saran tenaga kesehatan." })]
				}) })
			]
		})
	});
}
var TIPS = [
	{
		icon: Droplets,
		title: "Penyiraman",
		text: "Siram secara rutin sekitar 2 kali seminggu dan sesuaikan dengan kondisi cuaca serta kelembapan media. Hindari genangan air."
	},
	{
		icon: Leaf,
		title: "Pemupukan",
		text: "Berikan pupuk organik, kompos, atau mulsa secara berkala, misalnya sekitar setiap 2 bulan, sesuai kondisi pertumbuhan tanaman."
	},
	{
		icon: Scissors,
		title: "Pemangkasan",
		text: "Bersihkan daun yang tua, kering, atau rusak agar rumpun tetap rapi dan membantu menjaga kebersihan tanaman."
	},
	{
		icon: Bug,
		title: "Pengendalian Hama",
		text: "Periksa rumpun secara berkala. Bersihkan gulma dan singkirkan bagian tanaman yang menunjukkan tanda serangan hama atau penyakit."
	},
	{
		icon: Waves,
		title: "Drainase",
		text: "Pastikan pot atau saluran tanah memiliki drainase yang baik agar air tidak menggenang dan akar tetap sehat."
	}
];
function Care() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "perawatan",
		className: "bg-bg py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Perawatan",
				title: "Tips Merawat Sereh Merah",
				subtitle: "Rumpun yang rapi, media yang gembur, dan drainase yang lancar membuat sereh merah tumbuh lebih baik."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: TIPS.map((tip, i) => {
					const Icon = tip.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-lift flex h-full flex-col rounded-2xl bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-xl bg-mist text-leaf",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-medium text-forest",
									children: tip.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: tip.text
								})
							]
						})
					}, tip.title);
				})
			})]
		})
	});
}
var COMPOUNDS = [
	{
		icon: Wind,
		name: "Sitronelal",
		text: "Salah satu komponen utama minyak atsiri sereh wangi yang memberi karakter aroma sitronella yang segar dan mudah dikenali."
	},
	{
		icon: Droplets,
		name: "Sitronelol",
		text: "Senyawa aromatik yang terdapat dalam minyak atsiri dan sering dijumpai pada rangkaian pewangi serta produk perawatan beraroma herbal."
	},
	{
		icon: Flower2,
		name: "Geraniol",
		text: "Senyawa aromatik yang banyak digunakan dalam industri pewangi karena profil harumnya yang lembut dan floral-herbal."
	}
];
function Compounds() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kandungan",
		className: "bg-bg py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Minyak atsiri",
					title: "Kandungan Minyak Atsiri",
					subtitle: "Daun dan batang sereh merah dikenal sebagai sumber minyak atsiri. Berikut tiga senyawa yang paling sering dibahas."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/oil-sereh.jpg",
						alt: "Botol kaca minyak atsiri citronella di atas linen bersama potongan batang sereh",
						className: "h-full min-h-72 rounded-2xl shadow-soft"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: COMPOUNDS.map((item, i) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "card-lift flex gap-4 rounded-2xl bg-surface p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-mist text-leaf",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-medium text-forest",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted md:text-base",
										children: item.text
									})] })]
								})
							}, item.name);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 rounded-xl border border-border bg-surface px-5 py-4 text-sm text-muted",
					children: "Catatan: komposisi minyak atsiri dapat berbeda bergantung pada varietas, bagian tanaman, kondisi tumbuh, dan metode ekstraksi."
				}) })
			]
		})
	});
}
var FACTS = [
	{
		icon: BookOpen,
		text: "Nama ilmiahnya adalah Cymbopogon nardus"
	},
	{
		icon: Wheat,
		text: "Termasuk famili Poaceae"
	},
	{
		icon: Leaf,
		text: "Merupakan tanaman rumput-rumputan aromatik"
	},
	{
		icon: Droplets,
		text: "Dapat menghasilkan minyak atsiri"
	},
	{
		icon: Repeat,
		text: "Bagian yang umum dimanfaatkan adalah daun dan batang"
	},
	{
		icon: Wind,
		text: "Citronella banyak dikenal karena aroma khasnya"
	}
];
function Facts() {
	const loop = [...FACTS, ...FACTS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "fakta",
		className: "overflow-hidden bg-forest py-16 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-brand text-citron-soft uppercase",
				children: "Tahukah kamu?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-medium text-cream md:text-4xl",
				children: "Fakta singkat Sereh Merah"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-forest to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-forest to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track gap-4 px-4",
					children: loop.map((fact, i) => {
						const Icon = fact.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex min-w-72 items-center gap-3 rounded-2xl border border-cream/10 bg-forest-deep/50 px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-cream/10 text-citron-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-snug text-cream",
								children: fact.text
							})]
						}, `${fact.text}-${i}`);
					})
				})
			]
		})]
	});
}
function LeafMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "10",
				fill: "currentColor",
				className: "text-forest"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 21c4.5-1.6 7.4-6.2 6.2-11 3.4 1.4 6 5.2 5.2 9.4-3.1.9-7.2 2.4-11.4 1.6Z",
				fill: "#F4EFE4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16.2 10.4c-.4 3.6-2.2 6.6-5.4 8.4",
				stroke: "#C9A44A",
				strokeWidth: "1.2",
				strokeLinecap: "round"
			})
		]
	});
}
function Wordmark({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeafMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-display text-lg font-medium leading-none tracking-tight", light ? "text-cream" : "text-forest"),
			children: ["Sereh ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic",
				children: "Merah"
			})]
		})]
	});
}
function GrassSilhouette({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 420 420",
		className,
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 390c8-90 38-180 18-330",
				stroke: "currentColor",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 360c-40-70-92-120-150-148",
				stroke: "currentColor",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 340c42-66 98-112 158-132",
				stroke: "currentColor",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 300c-28-80-20-150 16-220",
				stroke: "currentColor",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 280c24-70 18-140-10-210",
				stroke: "currentColor",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			})
		]
	});
}
function GrowthStages({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 640 180",
		className,
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "32",
				y: "22",
				fill: "#6e8b74",
				fontSize: "12",
				fontFamily: "DM Sans, sans-serif",
				children: "Ilustrasi pertumbuhan rumpun"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 142h592",
				stroke: "#a98467",
				strokeWidth: "2",
				strokeDasharray: "4 8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 142c2-28 10-48 8-78",
				stroke: "#2c5a40",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 128c-14-16-22-22-38-24",
				stroke: "#2c5a40",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "90",
				cy: "150",
				r: "10",
				fill: "#a98467"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M250 142c4-40 16-78 10-118",
				stroke: "#2c5a40",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M250 118c-22-24-40-34-62-36",
				stroke: "#143326",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M250 110c20-22 40-28 62-26",
				stroke: "#2c5a40",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "250",
				cy: "150",
				r: "14",
				fill: "#a98467"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M430 142c6-48 20-96 8-128",
				stroke: "#143326",
				strokeWidth: "3.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M428 108c-30-28-58-38-86-36",
				stroke: "#2c5a40",
				strokeWidth: "2.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M432 96c32-26 64-34 92-28",
				stroke: "#2c5a40",
				strokeWidth: "2.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M430 80c-12-28 4-48 18-62",
				stroke: "#6e8b74",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M430 86c14-24 8-48-6-66",
				stroke: "#6e8b74",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "430",
				cy: "150",
				r: "18",
				fill: "#a98467"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M580 142c4-50 18-90 6-124",
				stroke: "#143326",
				strokeWidth: "3",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M572 142c-8-46-6-86 10-118",
				stroke: "#2c5a40",
				strokeWidth: "2.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M588 142c10-42 8-80-8-112",
				stroke: "#2c5a40",
				strokeWidth: "2.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M574 100c-28-22-48-28-72-24",
				stroke: "#143326",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M588 92c24-20 48-24 70-16",
				stroke: "#2c5a40",
				strokeWidth: "2.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "580",
				cy: "150",
				r: "16",
				fill: "#a98467"
			})
		]
	});
}
function Blob({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: cn("absolute rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-sage/20", className)
	});
}
var NAV_ITEMS = [
	{
		id: "beranda",
		label: "Beranda"
	},
	{
		id: "identitas",
		label: "Identitas"
	},
	{
		id: "tentang",
		label: "Tentang"
	},
	{
		id: "manfaat",
		label: "Manfaat"
	},
	{
		id: "resep",
		label: "Resep"
	},
	{
		id: "menanam",
		label: "Menanam"
	},
	{
		id: "perawatan",
		label: "Perawatan"
	}
];
function scrollToId(id) {
	const el = document.getElementById(id);
	if (!el) return;
	const y = el.getBoundingClientRect().top + window.scrollY - 76;
	window.scrollTo({
		top: Math.max(0, y),
		behavior: "smooth"
	});
}
var FOOTER_LINKS = NAV_ITEMS.filter((item) => [
	"beranda",
	"identitas",
	"manfaat",
	"resep",
	"menanam",
	"perawatan"
].includes(item.id));
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-forest-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-md font-display text-2xl font-medium text-cream md:text-3xl",
					children: "Sereh Merah — Tanaman Aromatik untuk Kehidupan Sehari-hari"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-cream/70",
					children: "Website edukasi mengenai pengenalan, manfaat, penanaman, dan perawatan Sereh Merah (Cymbopogon nardus)."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-brand text-citron-soft uppercase",
				children: "Menu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: FOOTER_LINKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scrollToId(item.id),
					className: "min-h-11 text-left text-sm text-cream/80 transition-colors hover:text-cream",
					children: item.label
				}) }, item.id))
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-col gap-2 py-5 text-xs text-cream/55 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Sereh Merah Botanical Guide" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Informasi bersifat edukatif, bukan saran medis." })]
			})
		})]
	});
}
var STATS = [
	{
		value: "Cymbopogon nardus",
		label: "Nama Ilmiah"
	},
	{
		value: "Poaceae",
		label: "Famili"
	},
	{
		value: "Perennial",
		label: "Jenis Tanaman"
	},
	{
		value: "Batang & Daun",
		label: "Bagian Dimanfaatkan"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "beranda",
		className: "botanical-wash relative overflow-hidden pb-10 pt-24 md:pb-16 md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-sage/15 blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-citron/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrassSilhouette, { className: "pointer-events-none absolute -right-10 top-24 w-[28rem] text-forest/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-[0.7rem] font-semibold tracking-brand text-leaf uppercase",
						style: { animationDelay: "40ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, {
							className: "size-3.5 text-citron",
							"aria-hidden": "true"
						}), "Herbal Plant · Botanical Guide"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "hero-rise mt-5 font-display text-5xl font-medium text-forest md:text-7xl",
						style: { animationDelay: "120ms" },
						children: "Sereh Merah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise mt-3 font-display text-xl italic text-sage md:text-2xl",
						style: { animationDelay: "200ms" },
						children: "Cymbopogon nardus"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-rise mt-5 max-w-lg text-base text-muted md:text-lg",
						style: { animationDelay: "280ms" },
						children: "Tanaman aromatik dari keluarga rumput-rumputan yang dikenal kaya akan minyak atsiri dan memiliki beragam pemanfaatan dalam kehidupan sehari-hari."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-rise mt-8 flex flex-wrap gap-3",
						style: { animationDelay: "360ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => scrollToId("identitas"),
							className: "inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-semibold text-cream transition-transform duration-150 hover:bg-forest-deep active:scale-[0.96]",
							children: "Jelajahi Informasi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => scrollToId("menanam"),
							className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/20 bg-surface px-6 text-sm font-semibold text-forest transition-colors duration-150 hover:bg-mist active:scale-[0.96]",
							children: ["Cara Menanam", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-rise relative",
					style: { animationDelay: "200ms" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blob, { className: "left-6 top-8 size-64 bg-leaf/20 md:size-80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blob, { className: "right-4 bottom-6 size-40 bg-citron/25" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/hero-sereh.jpg",
							alt: "Tanaman sereh merah dalam pot terakota dengan daun hijau melengkung dan pangkal batang kemerahan",
							lazy: false,
							className: "relative aspect-3/4 max-h-[34rem] w-full rounded-2xl shadow-soft md:aspect-4/5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-surface/80 px-4 py-3 backdrop-blur-md md:right-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.68rem] font-semibold tracking-brand text-sage uppercase",
								children: "Citronella grass"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-lg text-forest",
								children: "Rumpun aromatik menahun"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap mt-12 md:mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-card md:grid-cols-4",
					children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cnStat(i),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.68rem] font-semibold tracking-brand text-sage uppercase",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-lg font-medium text-forest md:text-xl",
							children: stat.value
						})]
					}, stat.label))
				})
			})
		]
	});
}
function cnStat(i) {
	return [
		"border-border p-5 md:border-r",
		"border-border p-5 md:border-r",
		"border-t border-border p-5 md:border-t-0 md:border-r",
		"border-t border-border p-5 md:border-t-0"
	][i];
}
var ITEMS = [
	{
		icon: Leaf,
		label: "Nama Umum",
		value: "Sereh Merah / Sereh Wangi / Citronella"
	},
	{
		icon: BookOpen,
		label: "Nama Ilmiah",
		value: "Cymbopogon nardus"
	},
	{
		icon: Wheat,
		label: "Famili",
		value: "Poaceae (Suku rumput-rumputan)"
	},
	{
		icon: Repeat,
		label: "Jenis",
		value: "Tanaman rumpun menahun (perennial)"
	},
	{
		icon: Layers,
		label: "Bagian yang Dimanfaatkan",
		value: "Batang dan Daun"
	}
];
function Identity() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "identitas",
		className: "leaf-pattern py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Identitas tanaman",
				title: "Mengenal Sereh Merah",
				subtitle: "Ringkasan botani yang memudahkan Anda membedakan sereh merah dari rumput-rumputan lain di kebun."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
				children: ITEMS.map((item, i) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-lift h-full rounded-2xl bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-xl bg-mist text-leaf",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xs font-semibold tracking-brand text-sage uppercase",
									children: item.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-lg font-medium leading-snug text-forest",
									children: item.value
								})
							]
						})
					}, item.label);
				})
			})]
		})
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("beranda");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 18);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter((el) => Boolean(el));
		if (!sections.length) return;
		const io = new IntersectionObserver((entries) => {
			const id = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target.id;
			if (id) setActive(id);
		}, {
			rootMargin: "-40% 0px -50% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		sections.forEach((s) => io.observe(s));
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	function go(id) {
		setOpen(false);
		scrollToId(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300", scrolled || open ? "border-b border-border/80 bg-surface/92 shadow-sm backdrop-blur-md" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#identitas",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-forest focus:px-3 focus:py-2 focus:text-cream",
				onClick: (e) => {
					e.preventDefault();
					go("identitas");
				},
				children: "Lewati ke konten"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "wrap flex h-[4.25rem] items-center justify-between",
				"aria-label": "Navigasi utama",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-lg outline-offset-4",
						onClick: () => go("beranda"),
						"aria-label": "Kembali ke beranda",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(item.id),
							className: cn("rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200", active === item.id ? "bg-forest text-cream" : "text-leaf hover:bg-mist hover:text-forest"),
							"aria-current": active === item.id ? "page" : void 0,
							children: item.label
						}) }, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-forest lg:hidden",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						"aria-label": open ? "Tutup menu" : "Buka menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "mobile-menu",
				className: cn("absolute inset-x-0 top-full lg:hidden", open ? "pointer-events-auto" : "pointer-events-none"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					tabIndex: open ? 0 : -1,
					"aria-label": "Tutup overlay menu",
					className: cn("fixed inset-0 top-[4.25rem] bg-forest/30 transition-opacity duration-200", open ? "opacity-100" : "opacity-0"),
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("relative z-10 origin-top border-t border-border bg-surface px-5 py-4 shadow-soft transition-[transform,opacity] duration-200", open ? "translate-y-0" : "-translate-y-3", open ? "opacity-100" : "opacity-0"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-1",
						children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(item.id),
							className: cn("flex min-h-11 w-full items-center rounded-xl px-3 text-left text-base font-medium", active === item.id ? "bg-forest text-cream" : "text-forest hover:bg-mist"),
							children: item.label
						}) }, item.id))
					})
				})]
			})
		]
	});
}
var STEPS$1 = [
	{
		n: "01",
		title: "Siapkan Bibit",
		text: "Gunakan potongan stek batang atau pemisahan anakan/rumpun sereh merah yang sehat dan memiliki akar."
	},
	{
		n: "02",
		title: "Siapkan Tanah",
		text: "Gunakan media tanam yang gembur, kaya bahan organik, dan memiliki drainase yang baik."
	},
	{
		n: "03",
		title: "Tanam Bibit",
		text: "Tanam bibit ke dalam tanah atau pot besar dengan kedalaman sekitar 10–15 cm."
	},
	{
		n: "04",
		title: "Siram Secukupnya",
		text: "Lakukan penyiraman setelah penanaman agar media tetap lembap, tetapi jangan sampai tergenang."
	},
	{
		n: "05",
		title: "Beri Jarak",
		text: "Jika ditanam langsung di tanah, beri jarak antar tanaman agar rumpun dapat berkembang dengan baik."
	},
	{
		n: "06",
		title: "Tempat Terbuka",
		text: "Letakkan tanaman pada area yang mendapatkan sinar matahari yang cukup/penuh."
	}
];
function Planting() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menanam",
		className: "bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Budidaya",
					title: "Cara Menanam Sereh Merah",
					subtitle: "Enam langkah ringkas untuk menumbuhkan rumpun yang sehat di kebun atau pot besar."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-center gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/plant-sereh.jpg",
						alt: "Tangan menanam rumpun sereh merah ke dalam tanah kebun yang gembur",
						className: "aspect-4/3 rounded-2xl shadow-soft"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border bg-bg p-4 md:p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthStages, { className: "w-full text-leaf" })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
					children: STEPS$1.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-lift relative h-full rounded-2xl bg-bg p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl text-citron",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-medium text-forest",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: step.text
								})
							]
						})
					}) }, step.n))
				})
			]
		})
	});
}
var INGREDIENTS = [
	{
		icon: Leaf,
		text: "3–4 batang serai merah, cuci bersih dan buang daun atasnya"
	},
	{
		icon: Wheat,
		text: "2 ruas jari jahe merah (opsional, untuk memberikan rasa hangat)"
	},
	{
		icon: Droplets,
		text: "500 ml air"
	},
	{
		icon: Wheat,
		text: "2 sdm gula aren/gula merah, dapat diganti madu"
	},
	{
		icon: Citrus,
		text: "1/2 buah jeruk nipis, opsional"
	}
];
var STEPS = [
	{
		n: "01",
		title: "Memarkan Bahan",
		text: "Geprek bagian putih serai merah dan jahe hingga memar agar aroma dan komponen aromatiknya lebih mudah keluar saat direbus."
	},
	{
		n: "02",
		title: "Rebus",
		text: "Masukkan serai, jahe, dan gula aren ke dalam panci berisi 500 ml air. Rebus dengan api sedang hingga mendidih dan aroma harumnya keluar selama sekitar 10–15 menit."
	},
	{
		n: "03",
		title: "Sajikan",
		text: "Matikan api lalu saring air rebusan ke dalam cangkir. Tambahkan perasan jeruk nipis atau madu sesuai selera. Sajikan selagi hangat."
	}
];
function Recipe() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "resep",
		className: "botanical-wash py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Resep dapur",
					title: "Resep Minuman Sereh & Jahe",
					subtitle: "Minuman herbal hangat dengan aroma sitronella. Bukan obat, melainkan sajian dapur yang harum dan menenangkan."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mt-12 overflow-hidden rounded-2xl bg-surface shadow-card md:grid md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
							src: "/images/tea-sereh.jpg",
							alt: "Cangkir minuman herbal sereh jahe hangat dengan batang sereh, jahe, dan jeruk nipis",
							className: "aspect-4/3 md:aspect-auto md:min-h-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
											icon: Clock,
											label: "15 menit"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
											icon: Users,
											label: "2 sajian"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
											icon: Droplets,
											label: "Hangat"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-2xl font-medium text-forest",
									children: "Bahan-Bahan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-3",
									children: INGREDIENTS.map((item) => {
										const Icon = item.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3 text-sm text-ink md:text-base",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-mist text-leaf",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "size-4",
													"aria-hidden": "true"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.text })]
										}, item.text);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setOpen(true),
									className: "mt-6 inline-flex min-h-12 items-center rounded-full bg-forest px-6 text-sm font-semibold text-cream transition-transform duration-150 hover:bg-forest-deep active:scale-[0.96]",
									children: "Lihat Resep Lengkap"
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "relative h-full rounded-2xl border border-border bg-surface p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl text-citron",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-medium text-forest",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: step.text
								})
							]
						})
					}, step.n))
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeDialog, { onClose: () => setOpen(false) }) : null]
	});
}
function Meta({ icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-xs font-medium text-leaf",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-3.5",
			"aria-hidden": "true"
		}), label]
	});
}
function RecipeDialog({ onClose }) {
	const titleId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-forest-deep/50",
			"aria-label": "Tutup resep",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": titleId,
			className: cn("relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-surface p-6 shadow-soft sm:rounded-2xl sm:p-8"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Resep lengkap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: titleId,
						className: "mt-2 font-display text-3xl font-medium text-forest",
						children: "Minuman Sereh & Jahe"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "inline-flex size-11 items-center justify-center rounded-full border border-border text-forest",
						"aria-label": "Tutup",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Proses: memarkan bahan, rebus 10–15 menit, saring, lalu sajikan hangat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mt-6 font-display text-xl text-forest",
					children: "Bahan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5 text-sm text-ink",
					children: INGREDIENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.text }, item.text))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-bg p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold tracking-brand text-sage uppercase",
								children: ["Langkah ", step.n]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-lg text-forest",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: step.text
							})
						]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-xl bg-mist p-4 text-sm text-leaf",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-forest",
						children: "Tips penyajian"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 list-disc space-y-1 pl-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sajikan selagi hangat agar aroma sitronella lebih terasa." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bisa juga didinginkan dan disajikan dengan es, sesuai selera." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Madu sebaiknya ditambahkan setelah air tidak terlalu panas." })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs leading-relaxed text-muted",
					children: "Informasi resep ini bersifat edukatif untuk pemanfaatan dapur. Bukan pengganti diagnosis, pengobatan, atau saran tenaga kesehatan. Hentikan konsumsi jika timbul reaksi yang tidak nyaman dan konsultasikan ke profesional kesehatan bila diperlukan."
				})
			]
		})]
	});
}
var USES = [
	{
		icon: Leaf,
		title: "Herbal",
		text: "Digunakan sebagai bahan minuman herbal dan penggunaan tradisional."
	},
	{
		icon: Bug,
		title: "Repelan",
		text: "Aromanya dimanfaatkan dalam berbagai produk pengusir serangga."
	},
	{
		icon: FlaskConical,
		title: "Industri",
		text: "Minyak atsirinya dapat digunakan dalam parfum, aromaterapi, pewangi, dan produk perawatan tertentu."
	}
];
function Uses() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pemanfaatan",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Dalam keseharian",
				title: "Sereh Merah dalam Kehidupan Sehari-hari",
				subtitle: "Dari cangkir di dapur hingga botol pewangi — satu tanaman, tiga dunia pemanfaatan."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3 lg:grid-cols-1",
					children: USES.map((item, i) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "card-lift flex h-full gap-4 rounded-2xl bg-surface p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-mist text-leaf",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-medium text-forest",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: item.text
								})] })]
							})
						}, item.title);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/images/garden-sereh.jpg",
						alt: "Kebun sereh merah di pagi hari dengan rumpun hijau dan jalur tanah",
						className: "h-full min-h-72 rounded-2xl shadow-soft"
					})
				})]
			})]
		})
	});
}
function Home() {
	(0, import_react.useEffect)(() => {
		const id = window.location.hash.replace("#", "");
		if (id) requestAnimationFrame(() => scrollToId(id));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identity, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compounds, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Planting, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Care, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Uses, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
	] });
}
//#endregion
export { Home as component };
