import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const TableSection = ({ title, lists, setComp, loading }) => {
	return (
		<div className="col-lg-4 col-md-4 col-12">
			<div className="card">
				<div className="card-body" style={{ width: "100%", overflow: "auto", maxHeight: '80vh' }}>
					<h4>{title}</h4>
					<table className="table">
						<tbody id="competitors-list">
							{loading && (
								<tr>
									<td className='text-center'>
										<CircularProgress color="success" size={80} />
									</td>
								</tr>
							)}
							{lists && !loading && lists.map((list, index) => (
								<tr key={index} style={{ cursor: 'pointer' }}>
									<td><img src={`https://platform.dkv.global/files/${list.logo}`} alt="avatar" style={{ width: "50px" }} className="cursor-pointer" /></td>
									<td>
										<a onClick={() => {
											console.log(list);
											setComp(list)
										}}>
											{list["title"]}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default TableSection