<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Controller;
use Jet_Form_Builder\Gateways\Paypal\Scenario_Item_Base;

abstract class Scenario_View_Base extends Scenario_Item_Base {

	const COLUMN_CHOOSE = 'choose';
	const COLUMN_ACTIONS = 'actions';

	abstract public function get_columns_handlers(): array;

	abstract public function get_columns_headings(): array;

	public function get_single_actions(): array {
		return array();
	}

	public function get_list(): array {
		$paypal = Gateway_Manager::instance()->controller( Controller::ID );

		return $paypal->get_gateway_entries(
			array(
				'scenario' => static::scenario_id(),
			)
		);
	}

	/**
	 * @return array
	 */
	final public function load_view(): array {
		return array(
			'list'    => $this->prepare_list(),
			'columns' => $this->get_columns_headings(),
			'actions' => $this->get_single_actions(),
		);
	}

	public function prepare_list(): array {
		$list = $this->get_list();

		if ( ! $list || ! is_array( $list ) ) {
			return array();
		}
		$prepared = array();

		foreach ( $list as $item_id => $record ) {
			$prepared[ $item_id ] = array_merge(
				$this->prepare_record( $record ),
				array(
					'_ENTRY_ID' => $item_id,
				)
			);
		}

		return $prepared;
	}

	public function prepare_record( $record ): array {
		$prepared = array();

		foreach ( $this->get_columns_handlers() as $column_name => $column_attrs ) {
			$value                   = $column_attrs['value'] ?? false;
			$column_attrs['type']    = $column_attrs['type'] ?? 'string';
			$column_attrs['default'] = $column_attrs['default'] ?? false;

			$default = $this->prepare_record_value_type( $column_attrs['default'], $column_attrs );

			if ( ! is_callable( $value ) ) {
				$column_attrs['value'] = $value ?: $default;
			} else {
				$column_attrs['value'] = $this->prepare_record_value_type(
					call_user_func( $value, $record, $default ),
					$column_attrs
				);
			}

			$prepared[ $column_name ] = $column_attrs;
		}

		return $prepared;
	}

	protected function prepare_record_value_type( $value, $column ) {
		$type = $column['type'] ?? 'string';

		switch ( $type ) {
			case 'integer':
				return (int) $value;
			case 'float':
				return (float) $value;
			case 'array':
				return (array) $value;
			default:
				return (string) $value;
		}
	}

}
