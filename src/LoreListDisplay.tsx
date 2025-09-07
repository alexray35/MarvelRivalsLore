// LoreListDisplay.tsx
import { useNavigate } from 'react-router-dom';
import { LoreItems } from './LoreList';
import { useState } from 'react';

function LoreListDisplay() {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  const handleLoreItemClick = (titlePath: string, contentPath: string) => {
    navigate('/story', { state: { titlePath, contentPath } });
  };

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortedItems = () => {
    if (!sortConfig) return LoreItems;
    
    return [...LoreItems].sort((a, b) => {
      // TypeScript requires us to handle cases where the key might not exist
      const aValue = a[sortConfig.key as keyof typeof a] || '';
      const bValue = b[sortConfig.key as keyof typeof b] || '';
      
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const sortedItems = getSortedItems();

  return (
    <div className="lore-list-display">
      <table className="lore-items-table">
        <thead>
          <tr>
            <th onClick={() => requestSort('title')}>
              Title {sortConfig?.key === 'title' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => requestSort('source')}>
              Source {sortConfig?.key === 'source' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => requestSort('type')}>
              Type {sortConfig?.key === 'type' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr 
              key={index}
              onClick={() => handleLoreItemClick(item.titlePath, item.contentPath)}
              style={{ cursor: 'pointer' }}
            >
              <td>{item.title}</td>
              <td>{item.source}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoreListDisplay;