export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-3 md:py-3">
			<div className="text-center justify-center w-full">
				{children}
			</div>
		</section>
	);
}
