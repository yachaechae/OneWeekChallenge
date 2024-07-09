export function InputBox(
	inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
	return inputProps.type !== "password" ? (
		<div>
			<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
				{inputProps.title}
			</label>
			<div className="mt-2">
				<input
					{...inputProps}
					className="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	) : (
		<div>
			<div className="flex items-center justify-between">
				<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
					{inputProps.title}
				</label>
				{inputProps.name === `loginPassword` ? (
					<div className="text-sm">
						<a href="#" className="font-semibold text-rose-600 hover:text-rose-500">
							Forgot password?
						</a>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="mt-2">
				<input
					{...inputProps}
					className="block w-full rounded-md border-0 p-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
}
