export default function BreadcrumbHeader({ title, breadcrumbs = [] }) {
	return (
		<div className="hero common-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="hero-ct">
							<h1>{title}</h1>
							<ul className="breadcumb">
								{breadcrumbs.map((item, index) => (
									<li key={index} className={item.active ? "active" : ""}>
										{item.link ? (
											<a href={item.link}>{item.label}</a>
										) : (
											<>
												{index > 0 && <span className="ion-ios-arrow-right"></span>}
												{item.label}
											</>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
