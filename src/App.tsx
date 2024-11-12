import { Cell } from "./components/Cell";

function App() {
	return (
		<div className='mt-12 flex flex-col gap-y-6 p-4 max-w-3xl mx-auto rounded-md shadow'>
			<p className='p-4 bg-stone-50 rounded-md text-center'>Esempio CVA con TailwindCSS e twMerge: Allineamenti e dimensioni celle</p>
			<div className='w-full grid grid-cols-4 gap-4'>
				<Cell rowHeight={4} columnWidth={2} verticalAlignment={"center"}>
					<span>Cella alta</span>
				</Cell>
				<Cell columnWidth={2} rowHeight={2}>
					<span>Ciao</span>
				</Cell>
				<Cell columnWidth={2}>
					<span>Ciao</span>
				</Cell>
			</div>
		</div>
	);
}

export default App;
