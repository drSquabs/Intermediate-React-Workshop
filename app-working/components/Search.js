import Downshift from 'downshift';
import Router from 'next/router';
import withNotes from '../lib/withNotes';
import SearchStyles from './styles/SearchStyles';

const Search = ({ notes }) => (
  <Downshift
    onChange={note => Router.push(`/note?id=${note._id}`)}
    itemToString={item => (item ? item.title : '')}
  >
    {ds => (
      <div>
        <SearchStyles>
          <input {...ds.getInputProps({ placeholder: 'Search' })} />
          {ds.isOpen && (
            <ul {...ds.getMenuProps()}>
              {notes.map((item, index) => (
                <li
                  {...ds.getItemProps({
                    key: item._id,
                    index,
                    item,
                    className: ds.highlightedIndex === index ? 'selected' : '',
                  })}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </SearchStyles>
      </div>
    )}
  </Downshift>
);

export default withNotes(Search);
