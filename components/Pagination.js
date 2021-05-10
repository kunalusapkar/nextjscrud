import Link from 'next/link'
const PER_PAGE = 2
export default function Pagination({page,total}){
    const lastPage = Math.ceil(total/PER_PAGE)
    return(
        <div>
             {page>1 && (
        <Link href={`/events?page=${page-1}`}>
            <a className="btn-secondary" href="">Prev</a>
        </Link>
      )}
      {page<lastPage && (
        <Link href={`/events?page=${page+1}`}>
            <a className="btn-secondary" href="">Next</a>
        </Link>
      )}
        </div>
    )
}