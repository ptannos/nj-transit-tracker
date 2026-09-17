const styles = `
  :host {
    display: block;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-bottom: 2px solid var(--border-color, #ddd);
    padding-bottom: 1.5rem;
  }

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--secondary-color, #333);
  }

  .search-controls {
    flex: 1;
    max-width: 320px;
  }

  .search-input {
    width: 100%;
    padding: 0.7rem 0.9rem;
    border: 2px solid var(--border-color, #ddd);
    border-radius: 12px;
    font-size: 0.95rem;
  }

  .search-input:focus {
    outline: none;
    border-color: var(--primary-color, #0066cc);
  }

  .filter-controls {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    position: relative;
  }

  .filter-btn,
  .filter-icon-btn {
    padding: 0.5rem 1rem;
    border: 2px solid var(--border-color, #ddd);
    border-radius: 12px;
    background: white;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--muted-color, #444);
    transition: all 0.3s ease;
  }

  .filter-icon-btn {
    padding: 0.5rem 0.75rem;
  }

  .filter-icon-btn:hover,
  .filter-icon-btn:focus,
  .filter-btn:hover,
  .filter-btn:focus {
    border-color: var(--primary-color, #0066cc);
    color: var(--primary-color, #0066cc);
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 102, 204, 0.12);
  }

  .filter-btn.active {
    background-color: var(--primary-color, #0066cc);
    color: white;
    border-color: var(--primary-color, #0066cc);
  }

  .routes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem 1rem;
    color: #999;
  }

  .load-more-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .load-more-button {
    padding: 0.75rem 1.25rem;
    border: 2px solid var(--primary-color, #0066cc);
    border-radius: 100px;
    background: white;
    color: var(--primary-color, #0066cc);
    cursor: pointer;
    font-weight: 600;
  }

  .load-more-button:hover {
    background: var(--primary-color, #0066cc);
    color: white;
  }

  .filter-dropdown {
    position: absolute;
    top: 38px;
    right: 0px;
    min-width: 260px;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: linear-gradient(180deg, #ffffff, #fbfdff);
    border: 1px solid var(--border-color, #e6eef9);
    border-radius: 12px;
    padding: 2rem 1.5rem 1rem;
    box-shadow: 0 8px 20px rgba(12, 35, 64, 0.12);
    z-index: 1000;
    margin-top: 0.5rem;
  }

  .filter-dropdown-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.25rem;
  }

  .filter-dropdown-actions {
    display: flex;
    justify-content: flex-end;
  }

  .filter-dropdown-category {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .filter-dropdown-label p {
    margin: 0;
    font-size: 0.85rem;
    color: #556;
    font-weight: 600;
  }

  .filter-dropdown-options {
    margin-top: 0.35rem;
  }

  .filter-option {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.45rem 0.6rem;
    cursor: pointer;
    color: var(--muted-color, #333);
  }

  .filter-option input {
    width: 16px;
    height: 16px;
  }

  .filter-option .option-label {
    font-size: 0.95rem;
  }

  .filter-option.checkbox input {
    accent-color: var(--primary-color, #0066cc);
  }

  .apply-filters-btn {
    border: none;
    background: var(--primary-color, #0066cc);
    color: white;
    font-weight: 600;
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    margin: 0.5rem 1rem 0.6rem 1rem;
  }

  .apply-filters-btn:hover {
    filter: brightness(0.90);
  }
`;

export default styles;
